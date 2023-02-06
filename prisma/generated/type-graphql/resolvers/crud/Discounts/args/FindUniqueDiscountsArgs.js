"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueDiscountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DiscountsWhereUniqueInput_1 = require("../../../inputs/DiscountsWhereUniqueInput");
let FindUniqueDiscountsArgs = class FindUniqueDiscountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsWhereUniqueInput_1.DiscountsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DiscountsWhereUniqueInput_1.DiscountsWhereUniqueInput)
], FindUniqueDiscountsArgs.prototype, "where", void 0);
FindUniqueDiscountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueDiscountsArgs);
exports.FindUniqueDiscountsArgs = FindUniqueDiscountsArgs;
