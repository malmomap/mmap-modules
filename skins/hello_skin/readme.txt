
Så här skapar du ett eget skin:

1. Håll dig i skinnet och ändra i ditt skin:
- Kopiera hello_skin och döp om mappen till önskat namn (inga mellanslag eller konstiga/svenska tecken)
- Öppna deploy.xml och ersätt alla "hello_skin" med samma namn som du gav mappen

2. Ändra ini-filen
- Öppna config/cartesia_module_ini.xml
- Sök på "cartesia-skin-base" som ser ut så här:  <module dir="thirdparty/skins/cartesia-skin-base" name="cartesia-skin-base" permissionlevel="public"/>
- Direkt nedanför den raden lägg till följande rad eller kommentera ut/ta bort existerande rad (om det redan finns ett skin inlagt där):
	<module dir="custom/skins/hello_skin" name="hello_skin" permissionlevel="public"/>
- Byt ut "hello_skin" mot mappens namn på det skin som du skapade

3. Skapa nya CSSer
- I mappen css finns css-filer som sätter utseendet för olika delar i applikationen
- Ändra de som du önskar
- OBS! För att se resultatet i kartan måste du spara om cartesia_module_ini.xml och därefter ladda om CSM i webbläsaren. Detta eftersom CSM bygger sin kod om den upptäcker att ini-filen har förändrats sen sist.