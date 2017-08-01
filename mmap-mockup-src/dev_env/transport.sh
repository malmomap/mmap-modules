#!/bin/bash
. ./dev_env.cfg
echo Copying...
echo FROM: $(pwd)/dev_env/tmp/@@ENV_PKG_NAME
echo TO: $build_dir"@@ENV_PKG_NAME/"
# Make module directory at the build target
if [ -d $build_dir"@@ENV_PKG_NAME/" ]; then
    echo "Build directory exists!"
else
  if mkdir -p $build_dir"@@ENV_PKG_NAME/" ; then
    echo "Build directory created!"
  else
    echo "Failed to create build dir"
  fi
fi
if cp -Rf dev_env/tmp/@@ENV_PKG_NAME/* $build_dir"@@ENV_PKG_NAME/" ; then
    # If needed: also build directory for js.
    if [ -d $build_dir"@@ENV_PKG_NAME/js" ]; then
        echo "JS bundle directory exists!"
        cp ./build/bundle.js $build_dir"@@ENV_PKG_NAME/js/bundle.js"
    else
      if mkdir -p $build_dir"@@ENV_PKG_NAME/js" ; then
        echo "JS bundle directory created!"
        cp ./build/bundle.js $build_dir"@@ENV_PKG_NAME/js/bundle.js"
      else
        echo "Failed to create js build dir"
      fi
    fi
    echo "... Finished successfully!!"
else
    echo "Failed!"
fi
