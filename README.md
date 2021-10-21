# URUCHAMIANIE APLIKACJI

W celu otworzenia wykonanych zadań w lokalnym środowisku przeglądarki należy pobrać zamieszczony pakiet z zadaniami.
Na komputerze powinien być zainstalowany Node Package Manager, z pomocą którego uruchomimy aplikacje na localhost'cie:
1) przy pomocy terminala przechodzimy do folderu z danym zadaniem (przykładowa ścieżka: C:\Users\User\Desktop\RTB-House-main\zad.1),
2) instalujemy pakiet "parcel-bundler" przy pomocy komendy:
`npm i --save-dev parcel-bundler`,
3) uruchamiamy aplikację na localhost'cie przy pomocy komendy:
`npm run dev`,
4) aplikacja będzie dostępna w przeglądarce internetowej pod adresem: http://localhost:1234

## Treść Zad. 1
Stwórz banner w formacie 300x250. Wylosuj z pliku JSON cztery oferty. Układ bannera ma być taki jak na załączonym przykładzie (banner.jpg). 

Dodaj animacje "skaczącej ramki" - co dwie sekundy border oferty ma przeskakiwać na następną. Z ostatniej oferty ramka powinna przeskakiwać z powrotem na pierwszą.

Obrazki i cena + waluta powinny być zaczytywane z pliku JSON: http://rekrutacjartb.pl/developer/banner.json
Logo: http://rekrutacjartb.pl/developer/images/logo_rtb.png

As an input you will get a sum of digits (`number`).

## Treść Zad. 2
Stwórz banner w formacie 160x600. Wylosuj z pliku JSON trzy oferty. Układ bannera ma być taki jak na załączonym przykładzie (banner.jpg). 

Banner powinien być w formie slidera. 

Dane powinny być zaczytywane z pliku JSON: http://rekrutacjartb.pl/developer/banner.json
Logo: http://rekrutacjartb.pl/developer/images/logo_rtb.png

## Treść Zad. 3
Zaprogramuj counter, który zlicza ilość czasu pozostałego np. do końca promocji (od dnia dzisiejszego do analogicznej daty tydzień później) w formie "Do końca pozostało: DD-HH-MM".

Dodaj warunki, które wyłączą ilość dni/godzin w momencie kiedy wynoszą 0.
