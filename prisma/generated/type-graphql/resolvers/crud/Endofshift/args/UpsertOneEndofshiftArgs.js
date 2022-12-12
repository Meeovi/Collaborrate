"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneEndofshiftArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EndofshiftCreateInput_1 = require("../../../inputs/EndofshiftCreateInput");
const EndofshiftUpdateInput_1 = require("../../../inputs/EndofshiftUpdateInput");
const EndofshiftWhereUniqueInput_1 = require("../../../inputs/EndofshiftWhereUniqueInput");
let UpsertOneEndofshiftArgs = class UpsertOneEndofshiftArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftWhereUniqueInput_1.EndofshiftWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EndofshiftWhereUniqueInput_1.EndofshiftWhereUniqueInput)
], UpsertOneEndofshiftArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftCreateInput_1.EndofshiftCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EndofshiftCreateInput_1.EndofshiftCreateInput)
], UpsertOneEndofshiftArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftUpdateInput_1.EndofshiftUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EndofshiftUpdateInput_1.EndofshiftUpdateInput)
], UpsertOneEndofshiftArgs.prototype, "update", void 0);
UpsertOneEndofshiftArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneEndofshiftArgs);
exports.UpsertOneEndofshiftArgs = UpsertOneEndofshiftArgs;
