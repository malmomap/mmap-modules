@ECHO OFF
for /F "eol=#" %%i in (dev_env.cfg) do set %%i
::set build_dir

echo Copying...
echo FROM: %CD%\dev_env\tmp\@@ENV_PKG_NAME
echo TO: %build_dir%\@@ENV_PKG_NAME

if not exist "%build_dir%\@@ENV_PKG_NAME" mkdir "%build_dir%\@@ENV_PKG_NAME"
xcopy /S /Q /Y dev_env\tmp\@@ENV_PKG_NAME\* "%build_dir%\@@ENV_PKG_NAME\.\"
if ERRORLEVEL 1 goto :error_module_copy


if not exist "%build_dir%\@@ENV_PKG_NAME\.\js" mkdir "%build_dir%\@@ENV_PKG_NAME\.\js"
copy /Y build/bundle.js "%build_dir%\@@ENV_PKG_NAME\.\js\bundle.js"
if ERRORLEVEL 1 goto :error_js_copy

echo Transport succeeded!
goto :EOF

:error_module_copy
echo Failed to copy module_data
echo Transport failed!
goto :EOF

:error_js_copy
echo Failed to copy js bundle
echo Transport failed!
goto :EOF
