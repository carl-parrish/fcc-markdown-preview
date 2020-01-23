FROM gitpod/workspace-full

USER gitpod

# Install custom tools, runtime, etc.
RUN sudo add-apt-repository -y ppa:neovim-ppa/unstable
RUN sudo apt-get update && \
    sudo apt-get install -y zsh neovim

# set the zsh theme 
ENV ZSH_THEME cloud


#install NG CLI
RUN echo npm i @angular/cli -g
SHELL ["/bin/bash", "-o", "pipefail", "-c"]
RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh

#Install NG CLI
RUN npm i @angular/cli -g

