# Esercizio: calcolo prezzo del biglietto del treno
Trenitalia ha bisogno di un programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- Il prezzo del biglietto è definito in base ai km (0.21 € al km)
- Va applicato uno sconto del 20% per i minorenni
- Va applicato uno sconto del 40% per gli over 65 (fortunelli :older_adult:).
L'output del prezzo finale va messo fuori in forma umana (con massimo due cifre decimali, per indicare centesimi sul prezzo).

## Steps
- Step 1: Assegnare una variabile al prezzo/km e al prezzo pieno (prezzo/km * km)

- Step 2: Chiedere all'utente quanti km deve percorrere e assegnarlo a una variabile (number)

- Step 3: Chiedere all'utente l'età (x) (number)

- Step 4: Calcolo prezzo biglietto: prezzo pieno * sconto
    - SE x < 18:
        - Applicare sconto del 20%
    - SE x > 65:
        - Applicare sconto del 40%
    - ALTRIMENTI (per 18 < x > 65):
        - Applicare prezzo pieno

- Step 5: Visualizzare prezzo finale
    - Limitare il risultato a due cifre decimali


### Tools
- Variabile: const/let
- Prompt
- Number()
- If/else
- Console.log
- toFixed()
