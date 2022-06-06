"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyNewsletter_subscribersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Newsletter_subscribersWhereInput_1 = require("../../../inputs/Newsletter_subscribersWhereInput");
let DeleteManyNewsletter_subscribersArgs = class DeleteManyNewsletter_subscribersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersWhereInput_1.Newsletter_subscribersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersWhereInput_1.Newsletter_subscribersWhereInput)
], DeleteManyNewsletter_subscribersArgs.prototype, "where", void 0);
DeleteManyNewsletter_subscribersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyNewsletter_subscribersArgs);
exports.DeleteManyNewsletter_subscribersArgs = DeleteManyNewsletter_subscribersArgs;
