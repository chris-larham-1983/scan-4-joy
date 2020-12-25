let testResult = document.querySelector("#testResult");
let scanResult = document.getElementById("scanResult");
let myBarcodeScanner = new BarcodeScanner();

function runTest() {
    if(barcodeScanner) {
        testResult.innerHTML = "'barcodeScanner' exists...<br/>";
        if(myBarcodeScanner) {
            testResult.innerHTML += "...and so does 'myBarcodeScanner'.";
        }
    }
    else if(myBarcodeScanner) {
        testResult.innerHTML = "'barcodeScanner' doesn't exist, but 'myBarcodeScanner' exists...<br/>";
    }
    else {
        testResult.innerHTML = "Neither 'barcodeScanner' nor 'myBarcodeScanner' exists...<br/>";
    }
}

function attemptScan() {
    try {
        myBarcodeScanner.scan(
            function(result) {
                scanResult.innerHTML += "Result: " + result.text + "<br/>";
                scanResult.innerHTML += "Format: " + result.format + "<br/>";
                scanResult.innerHTML += "Cancelled: " + result.cancelled + "<br/>";
            },
            function(error) {
                scanResult.innerHTML += "Scanning error: " + error;
            },
            {
                preferFrontCamera: true,
                showFlipCameraButton: true,
                showTorchButton: true,
                torchOn: true,
                saveHistory: true,
                prompt: "Position a barcode inside the scan area",
                resultDisplayDuration: 1000,
                formats: "QR_CODE, DATA_MATRIX, UPC_A, UPC_E, EAN_8, EAN_13, CODE_39, CODE_93, CODE_128, CODABAR, ITF, RSS14, PDF_417, RSS_EXTENDED, AZTEC",
                disableSuccessBeep: false
            }
        )
    }
    catch(err) {
        scanResult.innerHTML += err;
    }
}
