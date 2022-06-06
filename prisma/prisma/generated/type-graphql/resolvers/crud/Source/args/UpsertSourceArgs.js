"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertSourceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SourceCreateInput_1 = require("../../../inputs/SourceCreateInput");
const SourceUpdateInput_1 = require("../../../inputs/SourceUpdateInput");
const SourceWhereUniqueInput_1 = require("../../../inputs/SourceWhereUniqueInput");
let UpsertSourceArgs = class UpsertSourceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceWhereUniqueInput_1.SourceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SourceWhereUniqueInput_1.SourceWhereUniqueInput)
], UpsertSourceArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceCreateInput_1.SourceCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SourceCreateInput_1.SourceCreateInput)
], UpsertSourceArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceUpdateInput_1.SourceUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SourceUpdateInput_1.SourceUpdateInput)
], UpsertSourceArgs.prototype, "update", void 0);
UpsertSourceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertSourceArgs);
exports.UpsertSourceArgs = UpsertSourceArgs;
