"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyDiscountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DiscountsWhereInput_1 = require("../../../inputs/DiscountsWhereInput");
let DeleteManyDiscountsArgs = class DeleteManyDiscountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsWhereInput_1.DiscountsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DiscountsWhereInput_1.DiscountsWhereInput)
], DeleteManyDiscountsArgs.prototype, "where", void 0);
DeleteManyDiscountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyDiscountsArgs);
exports.DeleteManyDiscountsArgs = DeleteManyDiscountsArgs;
