# cordova-plugin-usb-ccid
Experimental plugin using a USB smartcard reader and a CSCS card

This code has been built upon original code by Krishnendu Sekhar Das:

https://github.com/krish-dev/cordova-plugin-k-usb-nfc

I was looking for something that could connect with a USB CCID reader and read the data from a card.

While Krishnendu's original code was designed to work with NFC readers, I found it was able to communicate just as easily with a USB smartcard reader when running in non-contactless mode. However, I needed to make some changes to make it work correctly for my use case - starting by adding a 'listen' callback that fires whenever a card is inserted or removed from the reader.

I also added the 'transmit' function that allows low-level communications to/from the card directly within Cordova. The main idea is that you can write your own data handling logic in Javascript.

However, at the moment it is a bit of a hack between the original code and my new methods - for example, it will generate APDU commands internally, but doesn't really interpret the response codes, sending them onto the host app instead.