# AWS-AUTH-SERVICE
> Serviço resposável por rodar `scripts` de tempos em tempos para garantir autenticação na **AWS**

> PS.: A primeira execução do dia, irá pedir suas credenciais da **AWS**. Nas demais execuções o serviço irá renovar as credenciais sem a necessidade de inserir login e senha novamente.


## Configurações Gerais
* Dentro do arquivo [pre_script.cmd](./pre_script.cmd) alterar o caminho até a pasta `.aws/setprofile.pl` de acordo como estiver configurado localmente em sua máquina.

    ### Ex.:

    ```bash
    aws-vault exec uat-service-bus -- perl /Users/BI00XXXX/.aws/setprofile.pl
    ```

* Para alterar o tempo entre uma atenticação e outra basta alterar o parametro do `cron` onde tem alguns pré configurados dentro do objeto [cron-times](./models/cron-times.js):

    ```JavaScript
    const job = cron.schedule(time.EVERY_TWO_MINUTES,() => {
        preScript();
    });
    ```
    ```JavaScript
    const job = cron.schedule(time.EVERY_FIVE_MINUTES,() => {
        preScript();
    });
    ```

## Start do projeto
* Rodar o `npm install` para atualizar os pacotes.
* Rodar o service com `node index.js`.

## Dúvidas e sujestões

[![Slack](https://img.shields.io/badge/Slack-Igor_Araujo-4A154B?style=for-the-badge&logo=slack&logoColor=white)](https://inter.slack.com/team/U042F16BMDY)