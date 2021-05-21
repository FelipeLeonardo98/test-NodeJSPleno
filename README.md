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
    - **Configurações de estilo:** Usuflui de algumas configurações de estilo, como alteração da cor padrão do mapa, esconder pontos de referência (deixando o mapa mais "limpo" somente com ruas, sem "detalhes").
    
      **Fonte:** https://mapstyle.withgoogle.com
    -  **Marker Clustering:** agrupamento dos "places", separando e agrupamento de acordo com o "zoom" ou "scroll" do mouse.

## Anotações importantes
---
- **Git Branchs:**
   - **Dev** : branch usada para desenvolver com ReactJS.
   - **Homologation** : branch desenvolvida com JavaScript puro
   - **Main** : branch principal, contém o merge com a branch **"Homologation"**
- A "Key" da API do GoogleMaps não está encapsulada pois influenciaria no "start" do projeto, provavélmente a equipe de seleção teria que alterar essa "key" para uma deles ou inserir a minha, já que o arquivo que conteria ela estaria no .gitignore. Logo a "key" está exposta com a minha ciência devido a este motivo.

- **Vídeo de demonstração:** React_Demonstração.mkv (Gravado através do OBS Studio)