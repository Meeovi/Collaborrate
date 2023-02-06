"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOnePluginsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PluginsWhereUniqueInput_1 = require("../../../inputs/PluginsWhereUniqueInput");
let DeleteOnePluginsArgs = class DeleteOnePluginsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsWhereUniqueInput_1.PluginsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PluginsWhereUniqueInput_1.PluginsWhereUniqueInput)
], DeleteOnePluginsArgs.prototype, "where", void 0);
DeleteOnePluginsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOnePluginsArgs);
exports.DeleteOnePluginsArgs = DeleteOnePluginsArgs;
