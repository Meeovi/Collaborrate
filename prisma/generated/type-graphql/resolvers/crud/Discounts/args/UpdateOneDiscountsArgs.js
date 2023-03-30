"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneDiscountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DiscountsUpdateInput_1 = require("../../../inputs/DiscountsUpdateInput");
const DiscountsWhereUniqueInput_1 = require("../../../inputs/DiscountsWhereUniqueInput");
let UpdateOneDiscountsArgs = class UpdateOneDiscountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsUpdateInput_1.DiscountsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DiscountsUpdateInput_1.DiscountsUpdateInput)
], UpdateOneDiscountsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsWhereUniqueInput_1.DiscountsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DiscountsWhereUniqueInput_1.DiscountsWhereUniqueInput)
], UpdateOneDiscountsArgs.prototype, "where", void 0);
UpdateOneDiscountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneDiscountsArgs);
exports.UpdateOneDiscountsArgs = UpdateOneDiscountsArgs;
