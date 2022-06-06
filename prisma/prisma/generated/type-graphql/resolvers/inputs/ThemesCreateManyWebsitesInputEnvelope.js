"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesCreateManyWebsitesInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThemesCreateManyWebsitesInput_1 = require("../inputs/ThemesCreateManyWebsitesInput");
let ThemesCreateManyWebsitesInputEnvelope = class ThemesCreateManyWebsitesInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThemesCreateManyWebsitesInput_1.ThemesCreateManyWebsitesInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ThemesCreateManyWebsitesInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ThemesCreateManyWebsitesInputEnvelope.prototype, "skipDuplicates", void 0);
ThemesCreateManyWebsitesInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ThemesCreateManyWebsitesInputEnvelope", {
        isAbstract: true
    })
], ThemesCreateManyWebsitesInputEnvelope);
exports.ThemesCreateManyWebsitesInputEnvelope = ThemesCreateManyWebsitesInputEnvelope;
