import {PluginItem} from "@babel/core";

export const removeDataTestIdBabelPlugin = (): PluginItem => {
    return {
        visitor: {
            Program(path, state) {
                const forbiddenProps = state.options.props || [];

                path.traverse({});
            }
        }
    }
}