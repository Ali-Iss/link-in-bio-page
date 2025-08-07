fetch('data.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('profile-pic').src = data.avatar;
    document.getElementById('profile-pic').alt = data.alt;
    document.getElementById('profile-name').textContent = data.name;
    document.getElementById("bio").textContent = data.bio;

    const linksContainer = document.getElementById('links');
    data.links.forEach(link => {
      const a = document.createElement('a');
      a.href = link.url;
      a.textContent = link.label;
      a.className = 'btn';
      linksContainer.appendChild(a);
    });
  });
