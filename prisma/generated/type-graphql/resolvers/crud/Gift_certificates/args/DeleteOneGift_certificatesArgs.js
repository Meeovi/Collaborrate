"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneGift_certificatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Gift_certificatesWhereUniqueInput_1 = require("../../../inputs/Gift_certificatesWhereUniqueInput");
let DeleteOneGift_certificatesArgs = class DeleteOneGift_certificatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesWhereUniqueInput_1.Gift_certificatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Gift_certificatesWhereUniqueInput_1.Gift_certificatesWhereUniqueInput)
], DeleteOneGift_certificatesArgs.prototype, "where", void 0);
DeleteOneGift_certificatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneGift_certificatesArgs);
exports.DeleteOneGift_certificatesArgs = DeleteOneGift_certificatesArgs;
