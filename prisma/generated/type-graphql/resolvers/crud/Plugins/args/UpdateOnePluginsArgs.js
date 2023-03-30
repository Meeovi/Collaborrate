"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOnePluginsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PluginsUpdateInput_1 = require("../../../inputs/PluginsUpdateInput");
const PluginsWhereUniqueInput_1 = require("../../../inputs/PluginsWhereUniqueInput");
let UpdateOnePluginsArgs = class UpdateOnePluginsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsUpdateInput_1.PluginsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PluginsUpdateInput_1.PluginsUpdateInput)
], UpdateOnePluginsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsWhereUniqueInput_1.PluginsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PluginsWhereUniqueInput_1.PluginsWhereUniqueInput)
], UpdateOnePluginsArgs.prototype, "where", void 0);
UpdateOnePluginsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOnePluginsArgs);
exports.UpdateOnePluginsArgs = UpdateOnePluginsArgs;
