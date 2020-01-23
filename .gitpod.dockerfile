FROM gitpod/workspace-full

USER gitpod

# Install custom tools, runtime, etc.
RUN sudo add-apt-repository -y ppa:neovim-ppa/unstable
RUN sudo apt-get update && \
    sudo apt-get install -y zsh neovim

# set the zsh theme 
ENV ZSH_THEME cloud


#install NG CLI
SHELL ["/bin/bash", "-o", "pipefail", "-c"]
RUN npm i npm -g
RUN npm i @angular/cli -g
RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh
RUN zsh