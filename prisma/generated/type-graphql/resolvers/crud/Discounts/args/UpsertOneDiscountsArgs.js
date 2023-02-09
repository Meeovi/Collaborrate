"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneDiscountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DiscountsCreateInput_1 = require("../../../inputs/DiscountsCreateInput");
const DiscountsUpdateInput_1 = require("../../../inputs/DiscountsUpdateInput");
const DiscountsWhereUniqueInput_1 = require("../../../inputs/DiscountsWhereUniqueInput");
let UpsertOneDiscountsArgs = class UpsertOneDiscountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsWhereUniqueInput_1.DiscountsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DiscountsWhereUniqueInput_1.DiscountsWhereUniqueInput)
], UpsertOneDiscountsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsCreateInput_1.DiscountsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DiscountsCreateInput_1.DiscountsCreateInput)
], UpsertOneDiscountsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsUpdateInput_1.DiscountsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DiscountsUpdateInput_1.DiscountsUpdateInput)
], UpsertOneDiscountsArgs.prototype, "update", void 0);
UpsertOneDiscountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneDiscountsArgs);
exports.UpsertOneDiscountsArgs = UpsertOneDiscountsArgs;
