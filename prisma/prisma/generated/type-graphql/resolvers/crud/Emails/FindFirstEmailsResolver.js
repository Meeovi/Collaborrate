"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstEmailsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstEmailsArgs_1 = require("./args/FindFirstEmailsArgs");
const Emails_1 = require("../../../models/Emails");
const helpers_1 = require("../../../helpers");
let FindFirstEmailsResolver = class FindFirstEmailsResolver {
    async findFirstEmails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Emails_1.Emails, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstEmailsArgs_1.FindFirstEmailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstEmailsResolver.prototype, "findFirstEmails", null);
FindFirstEmailsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Emails_1.Emails)
], FindFirstEmailsResolver);
exports.FindFirstEmailsResolver = FindFirstEmailsResolver;
