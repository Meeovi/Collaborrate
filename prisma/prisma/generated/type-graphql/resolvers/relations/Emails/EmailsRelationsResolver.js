"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customers_1 = require("../../../models/Customers");
const Emails_1 = require("../../../models/Emails");
const helpers_1 = require("../../../helpers");
let EmailsRelationsResolver = class EmailsRelationsResolver {
    async customers(emails, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.findUnique({
            where: {
                id: emails.id,
            },
        }).customers({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Customers_1.Customers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Emails_1.Emails, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailsRelationsResolver.prototype, "customers", null);
EmailsRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Emails_1.Emails)
], EmailsRelationsResolver);
exports.EmailsRelationsResolver = EmailsRelationsResolver;
