const { BrowserWindow } = require("electron");
const url = require("url");

const path = require("path");

let NewProductWindows;
function createNewProductWindows() {
  NewProductWindows = new BrowserWindow({
    width: 400,
    height: 330,
    title: "Add New Product",
  });
  console.log("ESTO ES DIRNAME", __dirname);
  NewProductWindows.setMenu(null);
  NewProductWindows.loadURL(
    url.format({
      pathname: path.join(__dirname, "../views/new-product.html"),
      protocol: "file",
      slashes: true,
    })
  );
}

const templateMenu = [
  {
    label: "File",
    submenu: [
      {
        label: "New Productor",
        acceleraor: "Ctrl+N",
        click() {
          createNewProductWindows();
        },
      },
    ],
  },
];
module.exports = templateMenu;
