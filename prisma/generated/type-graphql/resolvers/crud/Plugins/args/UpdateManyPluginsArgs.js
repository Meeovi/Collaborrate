"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPluginsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PluginsUpdateManyMutationInput_1 = require("../../../inputs/PluginsUpdateManyMutationInput");
const PluginsWhereInput_1 = require("../../../inputs/PluginsWhereInput");
let UpdateManyPluginsArgs = class UpdateManyPluginsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsUpdateManyMutationInput_1.PluginsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PluginsUpdateManyMutationInput_1.PluginsUpdateManyMutationInput)
], UpdateManyPluginsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsWhereInput_1.PluginsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PluginsWhereInput_1.PluginsWhereInput)
], UpdateManyPluginsArgs.prototype, "where", void 0);
UpdateManyPluginsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyPluginsArgs);
exports.UpdateManyPluginsArgs = UpdateManyPluginsArgs;
