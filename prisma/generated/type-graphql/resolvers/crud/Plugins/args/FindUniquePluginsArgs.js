"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePluginsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PluginsWhereUniqueInput_1 = require("../../../inputs/PluginsWhereUniqueInput");
let FindUniquePluginsArgs = class FindUniquePluginsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsWhereUniqueInput_1.PluginsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PluginsWhereUniqueInput_1.PluginsWhereUniqueInput)
], FindUniquePluginsArgs.prototype, "where", void 0);
FindUniquePluginsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniquePluginsArgs);
exports.FindUniquePluginsArgs = FindUniquePluginsArgs;
