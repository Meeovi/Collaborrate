"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmailsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateEmailsArgs_1 = require("./args/UpdateEmailsArgs");
const Emails_1 = require("../../../models/Emails");
const helpers_1 = require("../../../helpers");
let UpdateEmailsResolver = class UpdateEmailsResolver {
    async updateEmails(ctx, info, args) {
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateEmailsArgs_1.UpdateEmailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateEmailsResolver.prototype, "updateEmails", null);
UpdateEmailsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Emails_1.Emails)
], UpdateEmailsResolver);
exports.UpdateEmailsResolver = UpdateEmailsResolver;
