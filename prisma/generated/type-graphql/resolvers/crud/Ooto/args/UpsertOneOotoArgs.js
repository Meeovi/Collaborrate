"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneOotoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OotoCreateInput_1 = require("../../../inputs/OotoCreateInput");
const OotoUpdateInput_1 = require("../../../inputs/OotoUpdateInput");
const OotoWhereUniqueInput_1 = require("../../../inputs/OotoWhereUniqueInput");
let UpsertOneOotoArgs = class UpsertOneOotoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoWhereUniqueInput_1.OotoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OotoWhereUniqueInput_1.OotoWhereUniqueInput)
], UpsertOneOotoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoCreateInput_1.OotoCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OotoCreateInput_1.OotoCreateInput)
], UpsertOneOotoArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoUpdateInput_1.OotoUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OotoUpdateInput_1.OotoUpdateInput)
], UpsertOneOotoArgs.prototype, "update", void 0);
UpsertOneOotoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneOotoArgs);
exports.UpsertOneOotoArgs = UpsertOneOotoArgs;
