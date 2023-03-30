"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyDiscountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DiscountsUpdateManyMutationInput_1 = require("../../../inputs/DiscountsUpdateManyMutationInput");
const DiscountsWhereInput_1 = require("../../../inputs/DiscountsWhereInput");
let UpdateManyDiscountsArgs = class UpdateManyDiscountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsUpdateManyMutationInput_1.DiscountsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DiscountsUpdateManyMutationInput_1.DiscountsUpdateManyMutationInput)
], UpdateManyDiscountsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsWhereInput_1.DiscountsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DiscountsWhereInput_1.DiscountsWhereInput)
], UpdateManyDiscountsArgs.prototype, "where", void 0);
UpdateManyDiscountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyDiscountsArgs);
exports.UpdateManyDiscountsArgs = UpdateManyDiscountsArgs;
