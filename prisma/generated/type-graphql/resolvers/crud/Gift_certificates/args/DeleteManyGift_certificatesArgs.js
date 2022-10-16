"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyGift_certificatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Gift_certificatesWhereInput_1 = require("../../../inputs/Gift_certificatesWhereInput");
let DeleteManyGift_certificatesArgs = class DeleteManyGift_certificatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesWhereInput_1.Gift_certificatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Gift_certificatesWhereInput_1.Gift_certificatesWhereInput)
], DeleteManyGift_certificatesArgs.prototype, "where", void 0);
DeleteManyGift_certificatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyGift_certificatesArgs);
exports.DeleteManyGift_certificatesArgs = DeleteManyGift_certificatesArgs;
