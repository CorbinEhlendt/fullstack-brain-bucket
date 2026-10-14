
const form = document.querySelector('#ideaForm');
const list = document.querySelector('#ideaList');
const message = document.querySelector('#message');
const search = document.querySelector('#search');
const categoryFilter = document.querySelector('#categoryFilter');
const cancelButton = document.querySelector('#cancelEdit');

let editingId = null;

async function request(url, options = {}) {
  const response = await fetch(url, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Request failed');
  }

  return data;
}

function showMessage(text) {
  message.textContent = text;
}

function escapeHTML(value = '') {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);
}

async function loadIdeas() {
  try {
    const params = new URLSearchParams();

    if (search.value.trim()) {
      params.set('search', search.value.trim());
    }

    if (categoryFilter.value.trim()) {
      params.set('category', categoryFilter.value.trim());
    }

    const ideas = await request(`/api/items?${params}`);

    list.innerHTML = '';

    if (ideas.length === 0) {
      list.textContent = 'No ideas found. Add one to get started!';
      return;
    }

    for (const idea of ideas) {
      const card = document.createElement('article');
      card.className = 'idea-card';

      card.innerHTML = `
        <h3>${escapeHTML(idea.name)}</h3>
        <p>${escapeHTML(idea.description)}</p>
        <p><strong>Category:</strong> ${escapeHTML(idea.category)}</p>
        <p><strong>Status:</strong> ${escapeHTML(idea.status)}</p>
        <button class="edit-button">Edit</button>
        <button class="delete-button">Delete</button>
      `;

      card.querySelector('.edit-button').addEventListener(
        'click', () => editIdea(idea._id)
      );

      card.querySelector('.delete-button').addEventListener(
        'click', () => deleteIdea(idea._id)
      );

      list.appendChild(card);
    }
  } catch (error) {
    showMessage(error.message);
  }
}

form.addEventListener('submit', async event => {
  event.preventDefault();

  const idea = {
    name: form.name.value.trim(),
    description: form.description.value.trim(),
    category: form.category.value.trim(),
    status: form.status.value
  };

  try {
    if (editingId) {
      await request(`/api/items/${editingId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(idea)
      });

      showMessage('Idea updated!');
    } else {
      await request('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(idea)
      });

      showMessage('Idea added!');
    }

    resetForm();
    await loadIdeas();
  } catch (error) {
    showMessage(error.message);
  }
});

async function editIdea(id) {
  try {
    const idea = await request(`/api/items/${id}`);

    editingId = id;
    form.name.value = idea.name || '';
    form.description.value = idea.description || '';
    form.category.value = idea.category || '';
    form.status.value = idea.status || 'New';

    form.querySelector('button[type="submit"]').textContent =
      'Save Changes';

    cancelButton.hidden = false;
    showMessage('Editing idea');
    form.name.focus();
  } catch (error) {
    showMessage(error.message);
  }
}

async function deleteIdea(id) {
  if (!confirm('Delete this idea?')) return;

  try {
    await request(`/api/items/${id}`, { method: 'DELETE' });
    showMessage('Idea deleted!');
    await loadIdeas();
  } catch (error) {
    showMessage(error.message);
  }
}

function resetForm() {
  editingId = null;
  form.reset();

  form.querySelector('button[type="submit"]').textContent =
    'Add Idea';

  cancelButton.hidden = true;
}

cancelButton.addEventListener('click', () => {
  resetForm();
  showMessage('');
});

search.addEventListener('input', loadIdeas);
categoryFilter.addEventListener('input', loadIdeas);

loadIdeas();
