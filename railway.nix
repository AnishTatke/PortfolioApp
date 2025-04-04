{ pkgs }:

pkgs.mkShell {
  buildInputs = [
    pkgs.gcc                     # GNU Compiler Collection (C compiler)
    pkgs.gplusplus               # C++ compiler
    pkgs.libffi                 # Foreign function interface library
    pkgs.openssl                # OpenSSL libraries (libssl-dev equivalent)
    pkgs.python311              # Python 3.11
    pkgs.python311Packages.pip # pip for Python
    pkgs.python311Packages.setuptools
    pkgs.python311Packages.wheel
    pkgs.zlib                   # zlib compression library
    pkgs.pkg-config             # Required for many Python packages that need C headers
    pkgs.makeWrapper            # Support for build tools like Make (build-essential)
  ];
}