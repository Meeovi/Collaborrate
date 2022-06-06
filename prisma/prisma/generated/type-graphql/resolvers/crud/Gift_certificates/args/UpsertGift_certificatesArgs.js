"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertGift_certificatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Gift_certificatesCreateInput_1 = require("../../../inputs/Gift_certificatesCreateInput");
const Gift_certificatesUpdateInput_1 = require("../../../inputs/Gift_certificatesUpdateInput");
const Gift_certificatesWhereUniqueInput_1 = require("../../../inputs/Gift_certificatesWhereUniqueInput");
let UpsertGift_certificatesArgs = class UpsertGift_certificatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesWhereUniqueInput_1.Gift_certificatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Gift_certificatesWhereUniqueInput_1.Gift_certificatesWhereUniqueInput)
], UpsertGift_certificatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesCreateInput_1.Gift_certificatesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Gift_certificatesCreateInput_1.Gift_certificatesCreateInput)
], UpsertGift_certificatesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesUpdateInput_1.Gift_certificatesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Gift_certificatesUpdateInput_1.Gift_certificatesUpdateInput)
], UpsertGift_certificatesArgs.prototype, "update", void 0);
UpsertGift_certificatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertGift_certificatesArgs);
exports.UpsertGift_certificatesArgs = UpsertGift_certificatesArgs;
