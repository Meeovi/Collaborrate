"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOnePluginsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PluginsCreateInput_1 = require("../../../inputs/PluginsCreateInput");
const PluginsUpdateInput_1 = require("../../../inputs/PluginsUpdateInput");
const PluginsWhereUniqueInput_1 = require("../../../inputs/PluginsWhereUniqueInput");
let UpsertOnePluginsArgs = class UpsertOnePluginsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsWhereUniqueInput_1.PluginsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PluginsWhereUniqueInput_1.PluginsWhereUniqueInput)
], UpsertOnePluginsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsCreateInput_1.PluginsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PluginsCreateInput_1.PluginsCreateInput)
], UpsertOnePluginsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsUpdateInput_1.PluginsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PluginsUpdateInput_1.PluginsUpdateInput)
], UpsertOnePluginsArgs.prototype, "update", void 0);
UpsertOnePluginsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOnePluginsArgs);
exports.UpsertOnePluginsArgs = UpsertOnePluginsArgs;
