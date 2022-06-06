"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGift_certificatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Gift_certificatesUpdateInput_1 = require("../../../inputs/Gift_certificatesUpdateInput");
const Gift_certificatesWhereUniqueInput_1 = require("../../../inputs/Gift_certificatesWhereUniqueInput");
let UpdateGift_certificatesArgs = class UpdateGift_certificatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesUpdateInput_1.Gift_certificatesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Gift_certificatesUpdateInput_1.Gift_certificatesUpdateInput)
], UpdateGift_certificatesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesWhereUniqueInput_1.Gift_certificatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Gift_certificatesWhereUniqueInput_1.Gift_certificatesWhereUniqueInput)
], UpdateGift_certificatesArgs.prototype, "where", void 0);
UpdateGift_certificatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateGift_certificatesArgs);
exports.UpdateGift_certificatesArgs = UpdateGift_certificatesArgs;
