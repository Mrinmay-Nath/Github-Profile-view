const fetchGithubUser = () => {
    const searchInput = document.getElementById('searchInput');
    const username = searchInput.value;
    const userDetails = document.getElementById('userDetails');

    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            if (data.message == "Not Found") {
                alert(data.message);
            } else {
                userDetails.innerHTML = `
                    <div class="profile">
                        <div class="profile-image">
                            <img class="profile-image-icon" src="${data.avatar_url}" />
                        </div>
                        <div class="profile-details">
                            <h2 class="name">${data.name}</h2>
                            <p class="username">@${data.login}</p>
                            <p class="bio">${data.bio ? data.bio : 'This account don\'t have bio'}</p>

                            <div class="stats">
                                <div>
                                    <div class="stats-name">Public Repos</div>
                                    <div class="stats-name"><a href="https://github.com/${username}?tab=repositories" target="_blank">${data.public_repos}</a></div>
                                </div>
                                <div>
                                    <div class="stats-name">Followers</div>
                                    <div class="stats-name">${data.followers}</div>
                                </div>
                                <div>
                                    <div class="stats-name">Following</div>
                                    <div class="stats-name">${data.following}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
        })
        .catch(error => console.error(error));
}