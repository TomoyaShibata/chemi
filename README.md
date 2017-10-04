# chemi

![CAPTURE.gif](CAPTURE.gif)

Find chemical element from z number, symbol or element name.

# Install

```bash
$ npm install --global chemi
```

# Usage

## Show help

```bash
$ chemi -h

  Usage: chemi [options]


  Options:

    -V, --version              output the version number
    -z, --znumber <[znumber]>  Find by z number
    -s, --symbol <[symbol]>    Find by symbol
    -e, --element <[element]>  Find by element
    -h, --help                 output usage information
```

## Find by z number

```bash
$ chemi -z 2
z           : 2
symbol      : He
element     : Helium
group       : 18
period      : 1
wikipedia   : https://en.wikipedia.org/wiki/Helium
```

## Find by symbol

```bash
$ chemi -s Mg
z           : 12
symbol      : Mg
element     : Magnesium
group       : 2
period      : 3
wikipedia   : https://en.wikipedia.org/wiki/Magnesium
```

## Find by element

```bash
$ chemi -e Iridium
z           : 77
symbol      : Ir
element     : Iridium
group       : 9
period      : 6
wikipedia   : https://en.wikipedia.org/wiki/Iridium
```

# License

MIT
