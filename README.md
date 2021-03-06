# Rest + Express + JWT + Mongoose + Axios + GoogleMapsApi + Docker

## Dependências
- Docker
- Docker compose

## Executando o projeto
1. Criar um arquivo .env com base no arquivo example.env
    ### Exemplo de arquivo
    ```
    PORT = 8080
    MONGODB_URI = mongodb://easy_carros_db
    MONGODB_DATABASE = easycarros
    NODE_ENV=development
    SECRET=3OI15HT3QUODBHYI3g1iugYIEG31BIRUFBEHIUFHFE
    GOOGLE_MAPS_API_KEY={YOUR_API_KEY}
    TOKEN_EXPIRES_IN=3600
    ```

    - `PORT`: Porta do servidor
    - `MONGODB_URI`: URI do mongo (URI deve ser igual ao nome do container, no caso `easy_carros_db`)
    - `MONGODB_DATABASE`: Nome do banco utilizado pela aplicação.
    - `NODE_ENV`: Ambiente da aplicação.
    - `SECRET`: Chave utilizada pelo JWT.
    - `GOOGLE_MAPS_API_KEY`: Key da sua API do Google Maps.
    - `TOKEN_EXPIRES_IN`: Tempo passado para o JWT para expirar o token de autenticação.
2. Executar a aplicação
    > docker-compose up

## API
Todas as chamadas e exemplos da API estão [neste link](https://documenter.getpostman.com/view/8024266/SVn3tbMi).

## Tem alguma dúvida ou sugestão?

Manda no [meu e-mail](mailto:wrickee@gmail.com)! xD
