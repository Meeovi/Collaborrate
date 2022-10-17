"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneEmailsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneEmailsArgs_1 = require("./args/UpdateOneEmailsArgs");
const Emails_1 = require("../../../models/Emails");
const helpers_1 = require("../../../helpers");
let UpdateOneEmailsResolver = class UpdateOneEmailsResolver {
    async updateOneEmails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Emails_1.Emails, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneEmailsArgs_1.UpdateOneEmailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneEmailsResolver.prototype, "updateOneEmails", null);
UpdateOneEmailsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Emails_1.Emails)
], UpdateOneEmailsResolver);
exports.UpdateOneEmailsResolver = UpdateOneEmailsResolver;
