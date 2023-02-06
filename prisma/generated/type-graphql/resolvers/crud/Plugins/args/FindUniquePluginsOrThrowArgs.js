"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePluginsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PluginsWhereUniqueInput_1 = require("../../../inputs/PluginsWhereUniqueInput");
let FindUniquePluginsOrThrowArgs = class FindUniquePluginsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsWhereUniqueInput_1.PluginsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PluginsWhereUniqueInput_1.PluginsWhereUniqueInput)
], FindUniquePluginsOrThrowArgs.prototype, "where", void 0);
FindUniquePluginsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniquePluginsOrThrowArgs);
exports.FindUniquePluginsOrThrowArgs = FindUniquePluginsOrThrowArgs;
