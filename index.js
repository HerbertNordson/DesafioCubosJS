function fetchJson(url) {
  return fetch(url).then((resposta) => resposta.json());
}

fetchJson(
  "https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR"
).then((respostaJson) => {
  const filmes = respostaJson.results;

  const filmesGeral = document.querySelector(".filmesLista");

  filmesPopulares(filmes, filmesGeral);
});

function filmesPopulares(filmes, elemento) {
  for (const filme of filmes) {
    const li = document.createElement("li");
    elemento.append(li);

    li.innerHTML = `
			<div class="card">
				 <div class="imagem">
					<img src="${filme.poster_path}" alt="Cartaz do Filme" />
				</div>
				<div class="conteudo">
					<div class="topo">
					  <a href="/">${filme.original_title}</a>
					  <div class="circulo">
						<div class="percent"><span>${filme.vote_average}</span></div>
					</div>
				</div>
					<div class="sinopse">
					  <div class="dataLancamento"><span>${filme.release_date}</span></div>
					  <div class="resumo">
						<p>
						  ${filme.overview}
						</p>
					  </div>
					  
					</div>
				 </div>
			</div>`;
  }
}
