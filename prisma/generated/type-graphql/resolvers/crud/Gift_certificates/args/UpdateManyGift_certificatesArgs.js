"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyGift_certificatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Gift_certificatesUpdateManyMutationInput_1 = require("../../../inputs/Gift_certificatesUpdateManyMutationInput");
const Gift_certificatesWhereInput_1 = require("../../../inputs/Gift_certificatesWhereInput");
let UpdateManyGift_certificatesArgs = class UpdateManyGift_certificatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesUpdateManyMutationInput_1.Gift_certificatesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Gift_certificatesUpdateManyMutationInput_1.Gift_certificatesUpdateManyMutationInput)
], UpdateManyGift_certificatesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesWhereInput_1.Gift_certificatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Gift_certificatesWhereInput_1.Gift_certificatesWhereInput)
], UpdateManyGift_certificatesArgs.prototype, "where", void 0);
UpdateManyGift_certificatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyGift_certificatesArgs);
exports.UpdateManyGift_certificatesArgs = UpdateManyGift_certificatesArgs;
