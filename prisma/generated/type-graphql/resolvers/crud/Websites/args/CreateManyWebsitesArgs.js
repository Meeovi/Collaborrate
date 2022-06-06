"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyWebsitesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebsitesCreateManyInput_1 = require("../../../inputs/WebsitesCreateManyInput");
let CreateManyWebsitesArgs = class CreateManyWebsitesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WebsitesCreateManyInput_1.WebsitesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyWebsitesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyWebsitesArgs.prototype, "skipDuplicates", void 0);
CreateManyWebsitesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyWebsitesArgs);
exports.CreateManyWebsitesArgs = CreateManyWebsitesArgs;
