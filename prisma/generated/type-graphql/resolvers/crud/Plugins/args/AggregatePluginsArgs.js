"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePluginsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PluginsOrderByWithRelationInput_1 = require("../../../inputs/PluginsOrderByWithRelationInput");
const PluginsWhereInput_1 = require("../../../inputs/PluginsWhereInput");
const PluginsWhereUniqueInput_1 = require("../../../inputs/PluginsWhereUniqueInput");
let AggregatePluginsArgs = class AggregatePluginsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsWhereInput_1.PluginsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PluginsWhereInput_1.PluginsWhereInput)
], AggregatePluginsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PluginsOrderByWithRelationInput_1.PluginsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregatePluginsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsWhereUniqueInput_1.PluginsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PluginsWhereUniqueInput_1.PluginsWhereUniqueInput)
], AggregatePluginsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregatePluginsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregatePluginsArgs.prototype, "skip", void 0);
AggregatePluginsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregatePluginsArgs);
exports.AggregatePluginsArgs = AggregatePluginsArgs;
