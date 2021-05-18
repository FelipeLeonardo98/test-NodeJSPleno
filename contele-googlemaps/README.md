# test-NodeJSPleno

Este repositório apresenta minha proposta de solução para o desafio da empresa "CONTELE".

## Desafio
---

O objetivo é desenvolver uma página bem simples utilizando o **Maps Javascript API** para plotar os Markers(Pontos) no mapa. A Contele irá disponibilizar 50 mil pontos via JSON e você deverá plotar esses locais no mapa, mas o desafio será também fazer agrupamento dos pontos no Mapa.

## Sobre a solução desenvolvida
---
 - Para consumir o JSON disponibilizado pela equipe de seleção, criei uma conta na **Google Cloud Platform**, assim fui capaz de utilizar o **Maps JavaScript API** e obter a KEY de acesso.
 - ### **Desenvolvimento:**
    - HTML5, CSS3 e ReactJS
 - ### **Maps JavaScript API:**
    - **Configurações de estilo:** Usuflui de algumas configurações de estilo, como alteração da cor padrão do mapa, esconder pontos de referência (deixando o mapa mais "limpo" somente com ruas, sem "detalhes")
    -  **Marker Clustering:** agrupamento dos "places", separando e agrupamento de acordo com o "zoom" ou "scroll" do mouse.