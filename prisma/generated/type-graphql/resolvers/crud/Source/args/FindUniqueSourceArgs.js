"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSourceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SourceWhereUniqueInput_1 = require("../../../inputs/SourceWhereUniqueInput");
let FindUniqueSourceArgs = class FindUniqueSourceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceWhereUniqueInput_1.SourceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SourceWhereUniqueInput_1.SourceWhereUniqueInput)
], FindUniqueSourceArgs.prototype, "where", void 0);
FindUniqueSourceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueSourceArgs);
exports.FindUniqueSourceArgs = FindUniqueSourceArgs;
