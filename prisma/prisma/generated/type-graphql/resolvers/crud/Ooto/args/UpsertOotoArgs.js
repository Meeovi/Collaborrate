"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOotoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OotoCreateInput_1 = require("../../../inputs/OotoCreateInput");
const OotoUpdateInput_1 = require("../../../inputs/OotoUpdateInput");
const OotoWhereUniqueInput_1 = require("../../../inputs/OotoWhereUniqueInput");
let UpsertOotoArgs = class UpsertOotoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoWhereUniqueInput_1.OotoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OotoWhereUniqueInput_1.OotoWhereUniqueInput)
], UpsertOotoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoCreateInput_1.OotoCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OotoCreateInput_1.OotoCreateInput)
], UpsertOotoArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoUpdateInput_1.OotoUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OotoUpdateInput_1.OotoUpdateInput)
], UpsertOotoArgs.prototype, "update", void 0);
UpsertOotoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOotoArgs);
exports.UpsertOotoArgs = UpsertOotoArgs;
