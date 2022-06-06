"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesCreateNestedManyWithoutWebsitesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThemesCreateManyWebsitesInputEnvelope_1 = require("../inputs/ThemesCreateManyWebsitesInputEnvelope");
const ThemesCreateOrConnectWithoutWebsitesInput_1 = require("../inputs/ThemesCreateOrConnectWithoutWebsitesInput");
const ThemesCreateWithoutWebsitesInput_1 = require("../inputs/ThemesCreateWithoutWebsitesInput");
const ThemesWhereUniqueInput_1 = require("../inputs/ThemesWhereUniqueInput");
let ThemesCreateNestedManyWithoutWebsitesInput = class ThemesCreateNestedManyWithoutWebsitesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThemesCreateWithoutWebsitesInput_1.ThemesCreateWithoutWebsitesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThemesCreateNestedManyWithoutWebsitesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThemesCreateOrConnectWithoutWebsitesInput_1.ThemesCreateOrConnectWithoutWebsitesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThemesCreateNestedManyWithoutWebsitesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesCreateManyWebsitesInputEnvelope_1.ThemesCreateManyWebsitesInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesCreateManyWebsitesInputEnvelope_1.ThemesCreateManyWebsitesInputEnvelope)
], ThemesCreateNestedManyWithoutWebsitesInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThemesWhereUniqueInput_1.ThemesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThemesCreateNestedManyWithoutWebsitesInput.prototype, "connect", void 0);
ThemesCreateNestedManyWithoutWebsitesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThemesCreateNestedManyWithoutWebsitesInput", {
        isAbstract: true
    })
], ThemesCreateNestedManyWithoutWebsitesInput);
exports.ThemesCreateNestedManyWithoutWebsitesInput = ThemesCreateNestedManyWithoutWebsitesInput;
