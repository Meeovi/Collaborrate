"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueGift_certificatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Gift_certificatesWhereUniqueInput_1 = require("../../../inputs/Gift_certificatesWhereUniqueInput");
let FindUniqueGift_certificatesArgs = class FindUniqueGift_certificatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesWhereUniqueInput_1.Gift_certificatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Gift_certificatesWhereUniqueInput_1.Gift_certificatesWhereUniqueInput)
], FindUniqueGift_certificatesArgs.prototype, "where", void 0);
FindUniqueGift_certificatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueGift_certificatesArgs);
exports.FindUniqueGift_certificatesArgs = FindUniqueGift_certificatesArgs;
