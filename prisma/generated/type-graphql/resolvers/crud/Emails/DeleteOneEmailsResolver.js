"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneEmailsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneEmailsArgs_1 = require("./args/DeleteOneEmailsArgs");
const Emails_1 = require("../../../models/Emails");
const helpers_1 = require("../../../helpers");
let DeleteOneEmailsResolver = class DeleteOneEmailsResolver {
    async deleteOneEmails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.delete({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneEmailsArgs_1.DeleteOneEmailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneEmailsResolver.prototype, "deleteOneEmails", null);
DeleteOneEmailsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Emails_1.Emails)
], DeleteOneEmailsResolver);
exports.DeleteOneEmailsResolver = DeleteOneEmailsResolver;
