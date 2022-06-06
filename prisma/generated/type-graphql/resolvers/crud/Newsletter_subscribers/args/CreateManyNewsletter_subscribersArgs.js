"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyNewsletter_subscribersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Newsletter_subscribersCreateManyInput_1 = require("../../../inputs/Newsletter_subscribersCreateManyInput");
let CreateManyNewsletter_subscribersArgs = class CreateManyNewsletter_subscribersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersCreateManyInput_1.Newsletter_subscribersCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyNewsletter_subscribersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyNewsletter_subscribersArgs.prototype, "skipDuplicates", void 0);
CreateManyNewsletter_subscribersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyNewsletter_subscribersArgs);
exports.CreateManyNewsletter_subscribersArgs = CreateManyNewsletter_subscribersArgs;
